import { Button, TextInput, Label, Checkbox } from "flowbite-react"
import React from "react"

export default function Form() {
    return (
        <div className="w-full flex justify-center items-center">
            <form className="flex flex-col gap-4 w-full !mx-8">
            <div>
                <div className="mb-2 block">
                <Label
                    htmlFor="email1"
                    value="Your email"
                />
                </div>
                <TextInput
                id="email1"
                type="email"
                placeholder="name@flowbite.com"
                required={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                <Label
                    htmlFor="password1"
                    value="Your password"
                />
                </div>
                <TextInput
                id="password1"
                type="password"
                required={true}
                />
            </div>
            <Button type="submit">
                Submit
            </Button>
            </form>
            </div>
    )
}
