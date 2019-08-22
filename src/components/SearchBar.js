import React, {Component} from 'react';
import {AutoComplete, Input, Icon } from 'antd';
import nba from 'nba';
import { PROFILE_PIC_URL_PREFIX } from '../constants';

const Option = AutoComplete.Option;


export class SearchBar extends Component {
    state = {
        dataSource: [],
    };

    onSelect = (playerName) => {
        // console.log(playerName);
        this.props.handleSelectPlayer(playerName);
    }


    handleSearch = (value) => {
        // console.log(value);
        // const players = nba.searchPlayers(value);
        //console.log(players);

        this.setState({
            dataSource: !value ?
                [] : nba.searchPlayers(value).map(player => ({
                    fullName: player.fullName,
                    playerId: player.playerId,
                }))
        })
    };

        render() {
        const { dataSource } = this.state;
            const options = dataSource.map((player) => (
                <Option key={player.fullName} value={player.fullName}  className="player-option">
                    <img className="player-option-image"  src={`${PROFILE_PIC_URL_PREFIX}/${player.playerId}.png`}/>
                    <span className="player-option-label">{player.fullName}</span>
                </Option>
            ));

            return (
                <AutoComplete
                    className="search-bar"
                    size="large"
                    dataSource={options}
                    onSelect={this.onSelect}
                    onSearch={this.handleSearch}
                    placeholder="Search NBA Player"
                    optionLabelProp="text"
                >
                    <Input suffix={<Icon type="search" className="certain-category-icon" />} />
                </AutoComplete>
        );
    }
}
