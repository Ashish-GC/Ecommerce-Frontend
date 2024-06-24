import classes from "./LostPassword.module.css";

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


function LostPassword() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      user: "",
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
     
      <h1 className="mt-2 text-base text-center md:text-2xl  font-semibold">
        Login/Register
      </h1>
      <div className={classes.main}>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className={classes.form}>
          <p className="text-xs md:text-sm text-center">
          Lost your password? Please enter your username or email address. 
          You will receive a link to create a new password via email.
          </p>
          
            <FormField
              control={form.control}
              name="user"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <p className="text-sm md:text-base text-center">
                     Username or email <span className="text-red-500">*</span>
                    </p>
                  </FormLabel>
                  <FormControl>
                    <input
                      className={classes.input}
                      // placeholder="enter your  email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="bg-red-400 hover:bg-red-500 text-white  m-auto"
              type="submit"
            >
              RESET PASSWORD
            </Button>
          </form>
        </Form>
      
      </div>
    </>
  );
}

export default LostPassword;

const FormSchema = z.object({
    user: z.string().min(2, {
        message: "Username or email must be at least 2 characters.",
      }),
});

