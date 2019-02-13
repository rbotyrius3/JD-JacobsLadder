import React, { Component } from 'react'

import './AdminHome.css';
import '../custom-style.css'
import StudentCard from './StudentCard'
import {Button, Input, Row, Col} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class AdminHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "admin name"
        };

    }

    createCards() {
        let cards = [];
        for (let i = 0; i < 10; i++) {
            cards.push(<Col className={"col-4 p-2"}> <StudentCard/> </Col>)
        }
        return cards;
    }

    render() {

        return (
            <div>
                <div className = "adminHome container-fluid p-4" >
                    <div className = "row" >
                        <a className = "admin-top col-9">
                            <h1 className="">Admission Team Board: { this.state.user }</h1>
                        </a>
                    </div>
                    <div className="row pl-3 pr-3 align-items-center">
                        <Button className= "col-2 button h-50" >
                            <FontAwesomeIcon icon={"plus-circle"} /> Add New Student</Button>
                        <Input className="col-2 form-control ml-auto" type="search" placeholder="Search" aria-label="Search"/>
                        <Button className="button col-1 h-50" type="submit">Search</Button>
                    </div>
                    <Row>
                        { this.createCards() }
                    </Row>

                </div>

            </div>

    )
    }
}

// var mysql = require('mysql');
//
// var con = mysql.createConnection({
//     host: "jacobsladderintaketeam.cik1yin3pif1.us-east-1.rds.amazonaws.com",
//     user: "intaketeam",
//     password: "IwantanA123",
//     database: "intaketeam"
// });
//
// function getParentFirstName(UserID, callback){
//     var sql = "SELECT firstName FROM User WHERE userID = ?";
//
//     con.query(sql, UserID, function(err, result, fields) {
//         if (err) throw err;
//         return callback(result[0].firstName);
//     });
// }

export default AdminHome