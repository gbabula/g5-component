/**
 *
 * @module component/master
 * @author Greg Babula
 * @description entry point for all component specific functionality
 * @note useful cheatsheet http://ricostacruz.com/cheatsheets/react.html
 * @note composable React components https://medium.com/javascript-scene/baby-s-first-reaction-2103348eccdd
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
             * @description method called after render
             *
             */
            componentDidMount() {

                utils.log('react component mounted');

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
             * @method handleClick
             *
             */
            handleClick(event) {

                utils.log('example click event', event);

            },
            /**
             *
             * @method render
             * @returns {}
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
