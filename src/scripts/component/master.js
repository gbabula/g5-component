/**
 *
 * @module component/master
 * @author Greg Babula
 * @description entry point for all component specific functionality
 * @todo expand example further, cleanup, etc...
 *
 */

'use strict';

const React = require('react');

let Component = React.createClass({
    /**
     *
     * @method getInitialState
     * @returns {Object}
     *
     */
    getInitialState: function() {

        return {};

    },
    /**
     *
     * @method componentDidMount
     *
     */
    componentDidMount: function() {

    },
    /**
     *
     * @method render
     * @returns {}
     *
     */
    render: function() {

        let opts = this.props.opts;
        let game = this.props.data.data.game;

        return (
            <section className='g5-component--linescore__linescore'>
                <dl>
                    <dt className='g5-component--linescore__key'><strong>Home Team</strong></dt>
                    <dd className='g5-component--linescore__value'>{game.home_team_name}</dd>

                    <dt className='g5-component--linescore__key'><strong>Location</strong></dt>
                    <dd className='g5-component--linescore__value'>{game.location}</dd>

                    <dt className='g5-component--linescore__key'><strong>Game Date</strong></dt>
                    <dd className='g5-component--linescore__value'>{game.original_date}</dd>

                    <dt className='g5-component--linescore__key'><strong>Game Description</strong></dt>
                    <dd className='g5-component--linescore__value'>{game.description}</dd>

                    <dt className='g5-component--linescore__key'><strong>Game Time</strong></dt>
                    <dd className='g5-component--linescore__value'>{game.time}</dd>
                </dl>
            </section>
        );

    }
});

module.exports = Component;
