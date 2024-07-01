import React from 'react'

function Card({username = "AP", post = "Software Developer"}) {
    // console.log(props);
  return (
    <div>
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://i.pinimg.com/564x/95/84/5a/95845a081d05f398181dfa2f476c3eff.jpg" alt="" width="384" height="512" />
        <div className="pt-6 space-y-4">
            <blockquote>
            <p className="text-lg font-">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, minima.
            </p>
            </blockquote>
            <figcaption>
            <div>
                {username}
            </div>
            <div>
                {post}
            </div>
            </figcaption>
        </div>
        </figure>
    </div>
  )
}

export default Card