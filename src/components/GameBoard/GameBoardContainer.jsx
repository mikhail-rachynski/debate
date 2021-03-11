import React from 'react'
import {connect} from "react-redux";
import Table from "./Table/Table";
import Status from "./Status/Status";


class GameBoardContainer extends React.Component {
    render() {
        return <div>
            <div>
                <Status/>
            </div>
            <div>
                <Table/><Table/>
            </div>
        </div>
    }
}
export default connect()(GameBoardContainer)