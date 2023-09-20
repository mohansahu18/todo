import { useState, useEffect } from "react"
import React from 'react'
import { useForm } from "react-hook-form"

// import { apiConnector } from "../services/apiConnector"
// import endpoints from "../services/api"
const Body = () => {
    const [todo, setTodo] = useState([])
    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/v1/getAllTodo')
            .then(response => response.json())
            .then(data => {
                // Handle the JSON data here
                setTodo(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [])
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log("form data : - >", data)
    }

    return (

        <>
            {/* create todo form */}
            <form onSubmit={handleSubmit(onsubmit)} className="space-y-4">
                < div className="flex flex-col ">
                    <label className="text-sm text-richblack-5" htmlFor="title">
                        title <sup className="text-pink-200">*</sup>
                    </label>
                    <input
                        id="title"
                        placeholder="add title"
                        {...register("title", { required: true })}
                        className="form-style w-full"
                    />
                    {errors.title && (
                        <span className="ml-2 text-xs tracking-wide text-pink-200">
                            title is required
                        </span>
                    )}
                </div>
                < div className="flex flex-col ">
                    <label className="text-sm text-richblack-5" htmlFor="title">
                        description <sup className="text-pink-200">*</sup>
                    </label>
                    <input
                        id="title"
                        placeholder="description"
                        {...register("title", { required: true })}
                        className="form-style w-full"
                    />
                    {errors.title && (
                        <span className="ml-2 text-xs tracking-wide text-pink-200">
                            description required
                        </span>
                    )}
                </div>
                <button type="submit"
                >submit</button>
            </form>
            {/* displying all the todo */}
            <div className='text-xl bg-red-500'>
                <p>
                    {todo.data ? (
                        todo.data.map((e, i) => {
                            return (
                                <div key={i}>
                                    <h1>{e.title}</h1>
                                    <p>{e.description}</p>
                                </div>
                            )
                        })
                    ) : (
                        <p>Loading...</p>
                    )}
                </p>
            </div>
        </>
    )
}

export default Body
