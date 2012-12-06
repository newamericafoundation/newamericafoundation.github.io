var commentCounter = {
    items: {},
    repeatItems: [],
    count: 0,
    appKey: 'dev.slate.com',
    addUrl : function(url, element) {
        if (!this.items[url]) {
            this.items[url] = [];
        }
        this.items[url].push(element);
        this.count++;
    },
    // repeat items are when we display the comment count twice for one doc, in these cases
    // need an array to hold the url and element, but we only query with the initial items list, then look
    // at those results to populate this
    addRepeatUrl : function(url, element) {
        this.addUrl(url, element);
    },
	
    load : function() {
        var that = this;

        var count = 0;
		var bundle = {}
		// Chrome crashes if we send more than 5 urls at a time.
		// The request length should be less than 5k chars. o
        for (var url in this.items) {
            bundle[url] = url;
            count++;
			if (count % 5 == 0) {
                // Package items and run ajax
				this.run(this.createArray(bundle));
                bundle = {};
				
				
            }
        }
        // This is the end of the loop for you, buddy!
		if(this.isEmpty(bundle) ==false) {
			this.run(this.createArray(bundle));
		}
      
    },
	
	
	isEmpty: function(obj) {
		for(var i in obj)
		{ 
			return false;
		}
		return true;
	},
	
    run : function(requests) {
      //  console.log({"requests": requests});
      //  console.log(JSON.stringify(requests));
        var that = this;
        $.ajax({
            url: 'http://echoapi.slate.com/v1/mux',
            type: 'POST',
            data: {
                'appkey': this.appKey,
                'requests': JSON.stringify(requests)
            },
            dataType: 'jsonp',
            success: function(results) {
              //  console.log("Inside Run method");
              //  console.log(results);
                for (var url in that.items) {
                    if (results[url] && parseInt(results[url]['count']) > -1) {
                        for (var elm in that.items[url]) {
                        //sometimes a function makes it's way into this urls object. When older IEs
                        //try to apply $.text() to a function object, the whole page explodes. It's 
                        //related to swfs calling JS via ExternalInterface, but for now, just using
                        //a typeof conditional.
                            if(typeof that.items[url][elm] == 'object')
                            {
                                if($(that.items[url][elm]).attr('class') == "comment-count") {
                                    var commentText = "Comment";
                                    if(parseInt(results[url]['count']) > 1) {
                                        commentText+="s";
                                    }
                                    if(parseInt(results[url]['count']) > 0) {
                                        $(that.items[url][elm]).html("<span>" + results[url]['count'] + "</span> " + commentText);
                                    } else {
                                        $(that.items[url][elm]).html("<br/>" + commentText);
                                    }
                                } else {
                                    $(that.items[url][elm]).text(results[url]['count']);
                                }
                            }
                        }
                    }
                } 
            }    
        }); 
    },

    createArray : function(items) {
        var returnVals = [];
        for (var url in items) {
            returnVals.push({
                'id':url,
                'method':'count',
                'q':'childrenof:' + url + ' type:comment -source:Twitter sortOrder:reverseChronological (state:ModeratorApproved OR (state:Untouched -user.state:ModeratorBanned,ModeratorDeleted)) children:3 (state:ModeratorApproved OR (state:Untouched -user.state:ModeratorBanned,ModeratorDeleted)) '
            });
        }
        return returnVals;
    }
};




function loadCounts() {
    //var self = this;
    // used by post pages and listing pages
    $('.sl-article-tools-comments-count').each(function() {
        commentCounter.addUrl($(this).attr('uniq'), $(this));
    });
    // used by tag pages
    $('.comment-count').each(function() {
        commentCounter.addUrl($(this).attr('uniq'), $(this));
    });
    // used by post pages in second spot, for these, we just store a repeat url since we fetch data above for this page
    $('.sl-chunky-comments-inner').each(function() {
        commentCounter.addRepeatUrl($(this).attr('uniq'), $(this));
    });
    
    //used by floating toolbar
    $('.sl-comment-count').each(function() {
        commentCounter.addUrl($(this).attr('uniq'), $(this));
    });

    // used by chunky buttons.
    $('.sl-chunky-comm-count').each(function() {
        commentCounter.addRepeatUrl($(this).attr('uniq'), $(this));
    });
    
    commentCounter.load();
}

$(document).ready(function() {
    loadCounts();
});