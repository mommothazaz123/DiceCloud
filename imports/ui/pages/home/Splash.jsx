import React from 'react';
import Radium from 'radium'
import Flexbox from '../../Flexbox.jsx';
import { grey500, red600, grey100 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

class SignInButtons extends React.Component {
    render() {
        let user = Meteor.user();
        if (user) return (<div />);
        return (
            <Flexbox justifyContent='space-around'>
                <RaisedButton
                    label='Sign in'
                    labelColor={grey100}
                    backgroundColor={red600}
                    style={styles.button}
                    onTouchTap={() => FlowRouter.go('/login')}
                />
                <RaisedButton
                    label='Sign up'
                    labelColor={grey100}
                    backgroundColor={red600}
                    style={styles.button}
                    onTouchTap={() => FlowRouter.go('/signup')}
                />
            </Flexbox>
        );
    }
}
const Splash = ({style}) => (
    <Flexbox dir='column' alignItems='center' style={style}>
        <div style={styles.title}>
            Dice Cloud
        </div>
        <img style={{width: '130px', height: '130px'}}
            src='/png/crown-dice-logo-cropped-transparent.png' />
        <div style={styles.subtitle}>
            Unofficial Online Realtime D&amp;D 5e App
        </div>
        <h2>
            Spend less time shuffling paper and more time playing the game
        </h2>
        <SignInButtons />
    </Flexbox>
);
export default Radium(Splash);
var styles = {
    title: {
        fontSize: '45px',
        color: grey500,
        marginBottom: '30px',
    },
    subtitle: {
        fontSize: '36px',
        color: grey500,
        marginTop: '30px',
    },
    button: {
        marginLeft: '20px',
        marginRight:'20px',
    },
};
