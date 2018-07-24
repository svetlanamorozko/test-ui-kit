Sliding Panel Header with custom left and right blocks:

    <div>
      <button
        onClick={() => setState({ isSlidingPanelOpen: !state.isSlidingPanelOpen })}
      >Open panel</button>
      <SlidingPanel
        active={state.isSlidingPanelOpen}
        onClose={() => setState({ isSlidingPanelOpen: false })}
      >
        <SlidingPanelHeader
          renderRightBlock={props => (
            <button
              {...props}
              data-gtm-id="some-id"
              onClick={() => alert('Some additonal action')}
            > &#215; </button>
          )}
          renderLeftBlock={(props) => <button {...props} data-rel="close" data-gtm-id="some-id"> ← </button>}
        >
          Panel title
        </SlidingPanelHeader>

        <SlidingPanelContent>
          This is an example<br/>
          Of how simple it is to use<br/>
          Our sliding panel header.<br/><br/>
        </SlidingPanelContent>
      </SlidingPanel>
    </div>

Sliding Panel Header without default left block

    <div>
      <button
        onClick={() => setState({ isSlidingPanelOpen: !state.isSlidingPanelOpen })}
      >Open panel</button>
      <SlidingPanel
        active={state.isSlidingPanelOpen}
        onClose={() => setState({ isSlidingPanelOpen: false })}
      >
        <SlidingPanelHeader
          renderLeftBlock={() => null}
        >
          Panel title
        </SlidingPanelHeader>

        <SlidingPanelContent>
          This is an example<br/>
          Of how simple it is to use<br/>
          Our sliding panel header.<br/><br/>
        </SlidingPanelContent>
      </SlidingPanel>
    </div>
