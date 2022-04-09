import React from 'react'

export default function slug(props) {
    const { slug } = props;

    return (
        <div>{slug}</div>
    )
}

export async function getServerSideProps(context) {
    const { slug } = context.query

    return { props: { slug } };
}
