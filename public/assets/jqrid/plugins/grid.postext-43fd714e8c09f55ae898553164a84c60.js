!function(t){t.jgrid.extend({getPostData:function(){var t=this[0];if(t.grid)return t.p.postData},setPostData:function(t){var a=this[0];a.grid&&("object"==typeof t?a.p.postData=t:alert("Error: cannot add a non-object postData value. postData unchanged."))},appendPostData:function(a){var e=this[0];e.grid&&("object"==typeof a?t.extend(e.p.postData,a):alert("Error: cannot append a non-object postData value. postData unchanged."))},setPostDataItem:function(t,a){var e=this[0];e.grid&&(e.p.postData[t]=a)},getPostDataItem:function(t){var a=this[0];if(a.grid)return a.p.postData[t]},removePostDataItem:function(t){var a=this[0];a.grid&&delete a.p.postData[t]},getUserData:function(){var t=this[0];if(t.grid)return t.p.userData},getUserDataItem:function(t){var a=this[0];if(a.grid)return a.p.userData[t]}})}(jQuery);