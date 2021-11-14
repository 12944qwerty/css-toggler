const { React, i18n: { Messages } } = require('powercord/webpack');
const { Clickable } = require('powercord/components');

const SnippetButton = React.memo(props => {
  const [ applied, setApplied ] = React.useState(props.applied);

  const handleOnClick = React.useCallback(() => {
    const method = props.applied ? 'removeSnippet' : 'addSnippet';
    const argument = props.applied ? props.message.id : props.message;

    try {
      props.main.snippetManager[method](argument);
    } catch (e) {
      props.main.error(e);
    }

    setApplied(!applied);
  }, [ applied ]);

  return (
    <div className='powercord-snippet-apply'>
      <Clickable onClick={handleOnClick}>
        {props.applied ? Messages.CSS_TOGGLER_SNIPPET_REMOVE : Messages.POWERCORD_SNIPPET_APPLY}
      </Clickable>
    </div>
  );
});

module.exports = SnippetButton;
