import React from 'react'
import {Helmet} from "react-helmet-async";

const Title = (
    {title="Ping",
    description="A chat app called Ping"}
) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
    </Helmet>
  )
}

export default Title