/**
 *
 * @module component/master
 * @author Greg Babula
 * @description React component factory
 * @note useful cheatsheet http://ricostacruz.com/cheatsheets/react.html
 * @note composable React components https://medium.com/javascript-scene/baby-s-first-reaction-2103348eccdd
 * @note component specs https://facebook.github.io/react/docs/component-specs.html
 *
 */

'use strict';

// const $  = global.jQuery = require('jquery');
const utils = require('./../utils/master');

// require('bootstrap/js/tooltip');

/**
 *
 * @function componentFactory
 * @param {Object} {React} react core
 * @returns {Function} Component
 *
 */
const componentFactory = function({React}) {

    return function Component(props) {
        return {
            props,
            /**
             *
             * @method componentDidMount
             * @description Invoked once, only on the client (not on the server),
             * immediately after the initial rendering occurs.
             *
             */
            componentDidMount() {

                utils.log('react component mounted');

            },
            /**
             *
             * @method componentWillMount
             * @description Invoked once, both on the client and server,
             * immediately before the initial rendering occurs.
             *
             */
            componentWillMount() {

                utils.log('react component will mount');

            },
            /**
             *
             * @method componentWillUnmount
             * @description DOM cleanup, unbind any event listeners specific to this component
             *
             */
            componentWillUnmount() {

                utils.log('react component unmount');

            },
            /**
             *
             * @method componentWillUpdate
             * @param {Object} nextProps
             * @param {Object} nextState
             * @description Invoked immediately before rendering when new props or state
             * are being received. This method is not called for the initial render.
             *
             */
            componentWillUpdate() {

                utils.log('react component will update');

            },
            /**
             *
             * @method handleClick
             *
             */
            handleClick(event) {

                utils.log('example click event', event);

            },
            /**
             *
             * @method render
             * @returns {ReactElement}
             * @note The render() function should be pure, meaning that it does not modify
             * component state, it returns the same result each time it's invoked
             *
             */
            render() {

                let { opts } = this.props;
                let { game } = this.props.data.data;

                utils.log('react component render');

                return (
                    <section className='g5-component--linescore'>
                        <dl onClick={ this.handleClick }>
                            <dt className='g5-component--linescore__key'><strong>Home Team</strong></dt>
                            <dd className='g5-component--linescore__value'>{ game.home_team_name }</dd>

                            <dt className='g5-component--linescore__key'><strong>Location</strong></dt>
                            <dd className='g5-component--linescore__value'>{ game.location }</dd>

                            <dt className='g5-component--linescore__key'><strong>Game Date</strong></dt>
                            <dd className='g5-component--linescore__value'>{ game.original_date }</dd>

                            <dt className='g5-component--linescore__key'><strong>Game Description</strong></dt>
                            <dd className='g5-component--linescore__value'>{ game.description }</dd>

                            <dt className='g5-component--linescore__key'><strong>Game Time</strong></dt>
                            <dd className='g5-component--linescore__value'>{ game.time }</dd>
                        </dl>
                    </section>
                );

            }
        };
    };

};

module.exports = componentFactory;
