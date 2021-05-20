// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.

// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', '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');
});

// Put your campus prefix here
window.CAMPUS = 'hr-atx';
