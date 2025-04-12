import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm();

  const delay = (d) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, d * 1000);
    })
  }

  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:3000/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
    let res = await r.text();
    console.log(data,res);
  }

  // const onSubmit = async (data) => {
  //   await delay(3)
  //   console.log(data);
  //   if (data.username !== "Abhay") {
  //     setError("auth", { message: "Invalid User" })
  //   }
  // }

  return (
    <>
      {isSubmitting && <div>Loding...</div>}

      <form onSubmit={handleSubmit(onSubmit)}>

        <input type="text" placeholder="Name" {...register("username", { required: true, minLength: 3, maxLength: { value: 8, message: "Max len is 8" } })} />
        <br />
        {errors.username && <span>{errors.username.message}</span>}

        <br />

        <input type="password" placeholder="Password" {...register("password", { required: true })} />
        <br />
        {errors.password && <span>This field is required</span>}
        <br />

        <input disabled={isSubmitting} type="submit" value="submit" /><br />
        {errors.auth && <span>{errors.auth.message}</span>}
      </form>
    </>
  )
}

export default App
