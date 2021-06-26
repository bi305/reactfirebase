import { useState } from 'react';
import './Form.css'
const Form = ({ addoredit }) => {
    const initialFieldsValues = {
        url: '',
        webStieName: '',
        smallDescription: '',
        Category: '',
        subCategory: ''
    }
    var [values, setValues] = useState(initialFieldsValues);
    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values, [name]: value
        })
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        addoredit(values)
    }
    return (
        <>
            <div className="container my-5  " >
                <div className="row d-flex justify-content-center  ">
                    <div className="col-md-6  border rounded  shadow">
                        <form className="my-5" onSubmit={handleFormSubmit} >
                            <div className="form-group">
                                <label >Url</label>
                                <input type="text" name="url" className="form-control" placeholder="" onChange={handleInputChange} value={values.url} />

                            </div>
                            <div className="form-group">
                                <label >WebStie Name</label>
                                <input type="text" name="webStieName" className="form-control" placeholder="" onChange={handleInputChange} value={values.webStieName} />

                            </div> <div className="form-group">
                                <label >Small description </label>
                                <input type="text" name="smallDescription" className="form-control" placeholder="" onChange={handleInputChange} value={values.smallDescription} />

                            </div> <div className="form-group">
                                <label >Category</label>
                                <input type="text" name="Category" className="form-control" placeholder="" onChange={handleInputChange} value={values.Category} />

                            </div> <div className="form-group">
                                <label >Sub-Category</label>
                                <input type="text" name="subCategory" className="form-control" placeholder="" onChange={handleInputChange} value={values.subCategory} />

                            </div>

                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label" >Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Form
