import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function DualInfoBlock({heading,imageUrl,}) {
    return (
        <section className="container-fluid my-5 py-4 bg-theme">
            <Heading title={heading}/>
            <div className="row">
                <div className="col-8 mx-auto">
                    <p className="lead text-white mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ipsum esse voluptatem dolore similique, iste blanditiis, rerum reiciendis nobis cumque nam omnis dignissimos iusto saepe quas quibusdam atque ipsa? Molestias, cupiditate obcaecati aliquam consequatur aperiam doloribus nam laboriosam corporis quis ex, quod nisi! Provident, cupiditate odit! Doloremque accusamus dolore quo.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptates voluptatibus. Dolorum fugiat perferendis tempore quis. Voluptate, ducimus. Temporibus, ducimus. Qui quaerat animi incidunt recusandae voluptatum quos architecto voluptatem obcaecati doloribus quia iure eos expedita, blanditiis quibusdam, vel facere maiores illo voluptatibus. Sequi deserunt tempora commodi, quae dolore cum deleniti vel nostrum! Minus, maiores error non odio deserunt ducimus suscipit assumenda perferendis. Explicabo odio adipisci facere quae consequuntur repellat ratione totam molestiae consectetur voluptatum eos laboriosam modi eius dolorum reiciendis excepturi, quaerat soluta praesentium placeat culpa. Labore voluptate earum perspiciatis.</p>
                </div>
                <div className="col-4">
                    <div className="card bg-dark">
                        <img className="card-img-top" src={imageUrl} alt="Image goes here"/>
                        <div className="card-body">
                            <h5 className="card-title text-white">Just Click Photos</h5>
                            <p className="card-text text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor modi laudantium quaerat sed nobis consequuntur nesciunt ratione quo laborum maiores molestiae pariatur, quis recusandae perspiciatis illum praesentium, soluta expedita illo!
                            </p>
                            <Link to="/">
                                <button className="btn btn-warning btn-block"> {heading} </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
