import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'

export default function InfoBlock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa soluta quis nulla esse officia vel unde, enim temporibus, repellendus illo, voluptate debitis aperiam cumque possimus pariatur accusantium. Pariatur modi sequi blanditiis quas, quibusdam tempore facilis, placeat deserunt porro vel magnam repellendus dicta eos amet. Itaque nisi, rerum enim dolorum quibusdam perferendis corporis autem quis, in atque amet exercitationem eaque veritatis!
                        </p>
                        <Link to="/about/">
                            <button className="btn btn-warning btn-lg">{heading}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
