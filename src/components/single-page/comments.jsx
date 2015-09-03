var React = require('react');

var comments = `<div id="livefyre-comments"></div>
<script type="text/javascript" src="http://zor.livefyre.com/wjs/v3.0/javascripts/livefyre.js"></script>
<script type="text/javascript">
  (function () {
    var articleId = fyre.conv.load.makeArticleId(null);
    fyre.conv.load({}, [{
      el: 'livefyre-comments',
      network: "livefyre.com",
      siteId: "364172",
      articleId: articleId,
      signed: false,
      collectionMeta: {
        articleId: articleId,
        url: fyre.conv.load.makeCollectionUrl(),
      }
    }], function() {});
  }());
</script>`;

var Comments = React.createClass({
  render() {
    return (
      <div className="single-page__comments" dangerouslySetInnerHTML={{__html: comments}} />
    );
  }
});

module.exports = Comments;