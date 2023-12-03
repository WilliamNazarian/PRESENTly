"use client";
import { Mutation, useMutation } from "@tanstack/react-query";
import React from "react";

type Data = {
  firstName?: string;
  age?: number;
  gender?: string;
  occupation?: string;
  budget?: number;
  relationship?: string;
  interests?: string[];
  biography?: string;
};

function GiftForm() {
  const mutation = useMutation({
    mutationFn: async (data:Data) => {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.body;
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    const formData = new FormData(event.currentTarget);
    console.log(formData.get("biography"));
    const formProps = Object.fromEntries(formData);
    console.log(formProps); // Log the form data to the console
    mutation.mutate({ 
      firstName: formData.get("first-name") as string | undefined, 
      age: Number(formData.get("age")), 
      gender: formData.get("gender") as string | undefined, 
      occupation: formData.get("occupation") as string | undefined, 
      budget: Number(formData.get("budget")), 
      relationship: formData.get("relationship") as string | undefined, 
      interests: [
        formData.get("interest-1"),
        formData.get("interest-2"),
        formData.get("interest-3")
      ].filter((interest): interest is string => interest !== null) as string[],
      biography: formData.get("biography") as string | undefined 
    });
    event.currentTarget.reset(); // Clear the form
  };

  return (
    <form className="form-style sm:px-14 md:px-24" onSubmit={handleSubmit}>
      {/* Line 1: First Name, Age */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label htmlFor="first-name">First Name</label>
          <input id="first-name" name="first-name" type="text" placeholder="John" required />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label htmlFor="age">Age</label>
          <select id="age" name="age" style={{ maxHeight: "250px" }} required>
            {Array.from({ length: 101 }, (_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Line 2: Gender, Occupation */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" required>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label htmlFor="occupation">Occupation</label>
          <input id="occupation" name="occupation" type="text" placeholder="Engineer" required />
        </div>
      </div>

      {/* Line 3: Budget, Relationship */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3  md:mb-0">
          <label htmlFor="budget">Budget of Gift (CAD$)</label>
          <input id="budget" type="number" name="budget" placeholder="500" required />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label htmlFor="relationship">Relationship</label>
          <select id="relationship" name="relationship" required>
            <option>Spouse</option>
            <option>Friend</option>
            <option>Girlfriend</option>
            <option>Boyfriend</option>
            <option>Boss</option>
            <option>Kid</option>
            <option>Family Member</option>
          </select>
        </div>
      </div>

      {/* Line 4: Interests */}
      <div className="flex flex-wrap -mx-3 mb-6" id="interests">
        {[1, 2, 3].map((i) => (
          <div className="w-full md:w-1/3 px-3 md:mb-0" key={i}>
            <label htmlFor={`interest-${i}`}>Interest {i}</label>
            <input id={`interest-${i}`} name={`interest-${i}`} type="text" placeholder={`Interest ${i}`} required />
          </div>
        ))}
      </div>

      {/* Line 5: Biography Textbox */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label htmlFor="biography">Biography</label>
          <textarea id="biography" name="biography" placeholder="A quick summary of the person" rows={4} required></textarea>
        </div>
      </div>

      {/* Line 6: Submit Button */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 text-center">
          <button className="shadow bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default GiftForm;
