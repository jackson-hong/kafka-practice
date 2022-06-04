import React from "react"
import cookies from "react-cookies"

const CookieAdd = (cookieName, cookieValue, cookiePath, cooKieExpries) => {
    cookies.save(cookieName, cookieValue, {
        path: cookiePath || '/',
        expires: cooKieExpries || ''
    })
}

const CookieRemove = (cookieName, cookiePath, cooKieExpries) => {
    cookies.remove(cookieName, {
        path: cookiePath || '/',
        expires: cooKieExpries || '0'
    })
}

const CookieFind = (cookieName) => {
    const cookisLoad = cookies.load(cookieName)
    return cookisLoad
}

export {CookieAdd, CookieRemove, CookieFind}
