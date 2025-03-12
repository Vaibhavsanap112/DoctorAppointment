import React, { useState } from "react";
import { assets } from "../assets/assets";

function MyProfile() {
  const [userData, setUserData] = useState({
    name: "Vaibhav Sanap",
    image: assets.profile_pic,
    email: "vaibhav sanpa@gmail.com",
    phone: "876723190",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "2004-16-4",
  });
  const [isEdit, setIsEdit] = useState(true);
  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={userData.image} alt="" />
      {isEdit ? (
        <input className="bg-gray text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        ></input>
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4 "
        >{userData.name}</p>
      )}
    <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>

        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email ID:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input className="bg-gray-100 max-w-52"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            ></input>
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input className="bg-gray-50"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
                type="text"
                name=""
                id=""
              />
              <br />
              <input className="bg-gray-50"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
                type="text"
                name=""
                id=""
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line1}
            </p>
          )}
        </div>
      </div>

      <div className="">
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
      </div>
      <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
      <p className="font-medium">Gender:</p>
      {isEdit ? (
        <select className="max-w-20 bg-gray-100"
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, gender: e.target.value }))
          }
          value={userData.gender}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      ) : (
        <p className="text-gray-400">{userData.gender}</p>
      )}
      <p className="font-medium">BirthDay:</p>
      {isEdit ? (
        <input className="max-w-28 bg-gray-100"
          type="date"
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, dob: e.target.value }))
          }
          value={userData.dob}
        />
      ) : (
        <p className="text-gray-400">{userData.dob}</p>
      )}
      </div>
    < div className="mt-10">
      {
        isEdit
        ? <button className="border border-[#5f6fff] px-8 py-2 rounded-full cursor-pointer hover:bg-[#5f6fff] hover:text-white transition-all" onClick={()=>setIsEdit(false)}>Save Information</button>
        :<button  className="border border-[#5f6fff] px-8 py-2 rounded-full cursor-pointer  hover:bg-[#5f6fff] hover:text-white transition-all" onClick={()=>setIsEdit(true)}>Edit</button>
      }
    </div>
    </div>
    

      
  );
}

export default MyProfile;
