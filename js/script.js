$(document).ready(function(){


	//ajax send form

    var options = {
        beforeSubmit:  showRequest,  // pre-submit callback
        success:       showResponse  // post-submit callback
    };

    $('#appendLink').ajaxForm(options);

    function showRequest(formData, jqForm, options) {

        return true;
    }

    function showResponse(responseText, statusText, xhr, $form)  {

            alert(responseText);
    }


	$('.exportBookmarks').click(function(){
		chrome.bookmarks.getTree(function(BookmarkTreeNode) {
				for(var i=0;i<BookmarkTreeNode[0].children[0].children.length; i++){
					console.log(BookmarkTreeNode[0].children[0].children[i].url)
					$('#url').val(BookmarkTreeNode[0].children[0].children[i].url);
					//$('#appendLink').ajaxSubmit();
				}
			});

		
	});

	$('.exportTabs').click(function(){
		chrome.windows.getAll({"populate" : true}, function(windows)

		  {

		    for(var i = 0; i < windows.length; i++)
		    {
		      for(var j = 0; j < windows[i].tabs.length; j++)
		      {
			        console.log(windows[i].tabs[j].url);
		       }
		    }
		  });
	});

});