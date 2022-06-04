import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../_actions/user_action";
import {useHistory} from "react-router-dom";

export default function (SpecificComponent, option, adminRoute = null){

    function AuthenticationCheck(props) {
        // const dispatch = useDispatch();
        const history = useHistory();
        const isAuth = useSelector(state => state.user.isAuth);
        /*
        * option
        * = null - 누구나 들어갈 수 있는 페이지
        * = true - 로그인한 유저만 들어갈 수 있는 페이지
        * = false - 로그인한 유저는 들어갈 수 없는 페이지
        * */
        useEffect(() => {
            if(option === null) return;

            if(option && !isAuth) {
                history.push('/')
            }
        }, [])

        return (<SpecificComponent />)
    }

    return AuthenticationCheck;
}