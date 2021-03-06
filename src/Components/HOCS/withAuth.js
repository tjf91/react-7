import React, { useState, useEffect } from 'react'

const withAuth = (WrappedComponent) => {
  return (props) => {
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
      //Make api call to check role of current user
      if (props.isAdmin) {
        setIsAdmin(true)
      } else {
        setIsAdmin(false)
      }
    }, [props.isAdmin])

    return isAdmin ? (
      <WrappedComponent {...props} />
    ) : (
      <div>You can't see this, non-admin.</div>
    )
  }
}

export default withAuth
