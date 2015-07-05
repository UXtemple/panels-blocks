import * as PanelsBlocks from '../../index';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const { ActionBlock, ActionWithIconBlock, ImageBlock, SubtitleBlock, TextBlock, TitleBlock } = PanelsBlocks;
const actionStyle = {
  base: {
    marginTop: 25,
    padding: '15px 35px 15px 50px',
    backgroundColor: '#F2F2F2',
    color: '#353535'
  },
  active: {
    color: 'blue'
  }
}
const SHEEP = 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/4/11/1397210130748/Spring-Lamb.-Image-shot-2-011.jpg';

class Icon {
  render() {
    return <ImageBlock src={SHEEP} style={{height: 30, width: 30}} />;
  }
}

class Panel {
  static childContextTypes = {
    isActive: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired
  }

  getChildContext() {
    const isActive = () => console.log('isActive');
    const navigate = () => console.log('navigate');
    return { isActive, navigate };
  }

  render() {
    return (
      <div style={{width: 360}}>
        <TitleBlock title='Knock yourself out...' style={{marginTop: 50}} />
        <SubtitleBlock subtitle='With some links...' style={{marginTop: 25}} />
        <ActionWithIconBlock href='http://UXtemple.com' icon={Icon} style={actionStyle}>stuff</ActionWithIconBlock>
        <ActionBlock href='http://UXtemple.com' title='UXtemple' style={actionStyle} />
        <ActionBlock href='http://usepanels.com' title='use panels' style={actionStyle} />

        <SubtitleBlock subtitle='Or some text and images...' style={{marginTop: 50}} />
        <TextBlock style={{marginTop: 25}}>Use panels now :).</TextBlock>
        <ImageBlock src={SHEEP} style={{marginTop: 25}} />
        <TextBlock style={{marginTop: 25}}> Sheep not included. Unfortunately. :)</TextBlock>
      </div>
    );
  }
}

ReactDOM.render(
  <Panel />,
  document.getElementById('playground-container')
);

window.Playground = {
  PanelsBlocks
};

console.log('Welcome to panels-blocks playground.');
console.log('https://blocks.usepanels.com');
console.log('Playground module', Playground);
