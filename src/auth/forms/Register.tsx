import classes from "./Register.module.css";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { bannerImage } from "@/constants";

function Register() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
    });
    console.log(data);
  }

  return (
    <>
      <div className={classes.banner}>
        <img src={bannerImage} alt="Banner Image" />
        <div className={classes.bannerContent}>
          <h1 className="text-sm md:text-xl  font-semibold">My account</h1>
          <Link to="/">
            <p className="text-xs lg:ext-sm  hover:underline">Home</p>
          </Link>
        </div>
      </div>
      <h1 className="mt-2 text-base text-center md:text-2xl  font-semibold">
        Login/Register
      </h1>
      <div className={classes.main}>
        <h1 className="mt-3 mb-3 text-center text-[0.8rem] md:text-[1rem] font-semibold">
          Great to see you here!
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className={classes.form}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <p className="text-sm md:text-base">
                      Email address <span className="text-red-500">*</span>
                    </p>
                  </FormLabel>
                  <FormControl>
                    <input
                      type="email"
                      className={classes.input}
                      // placeholder="enter your  email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <p className="text-xs md:text-sm text-center">
              A link to set a new password will be sent to your email address.
            </p>
            <p className="text-xs md:text-sm text-center">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <span className="underline">privacy policy</span>.
            </p>

            <Button
              className="bg-red-400 hover:bg-red-500 text-white"
              type="submit"
            >
              SETUP YOUR ACCOUNT
            </Button>
          </form>
        </Form>
        <div className="mt-1">
          <p className="text-gray-500 text-xs md:text-sm">
            Already got an account ?
            <Link
              to="/my-account/login"
              className="underline hover:text-red-500 ml-1"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;

const FormSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address." }),
});
