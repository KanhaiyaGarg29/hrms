import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { addCategory } from "../services/operations/add";

const AddCategory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault()
   
    dispatch(addCategory(categoryName,categoryDescription,navigate));
   
  }

  return (
    <div>
      <div className="addcatcontainer">
        <div className="addcatcontent rounded border">
          <h3 className="text-center">Add Category</h3>
          <form className="addcatform" onSubmit={handleOnSubmit}>
            <div className="addcatgroup">
              <label htmlFor="name" className="form-label">
                <strong>Name:</strong>
              </label>
              <input
                type="text"
                className="addcat form-control"
                id="name"
                placeholder="Name"
                required
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </div>
            <div className="addcatgroup">
              <label htmlFor="description" className="form-label">
                <strong>Description:</strong>
              </label>
              <textarea
                id="description"
                className="addcat form-control custom-scrollbar"
                placeholder="Category Description"
                required
                value={categoryDescription}
                onChange={(e) => setCategoryDescription(e.target.value)}
              />
            </div>
            <div className="addcatbtngroup">
              <button type="submit" className="cat-save">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;