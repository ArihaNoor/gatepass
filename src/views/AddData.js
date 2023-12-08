import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReportTable from './ReportTable';

const AddData = () => {
  const [formData, setFormData] = useState({
    vendorName: '',
    brandName: '',
    vendorContact: '',
    date: '',
    time: '',
    reason: '',
    gatepassNumber: '',
  });

  const [showTable, setShowTable] = useState(false);

  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setShowTable(true);
  };

  return (
    <div className="container mx-auto mt-8">
      {showTable ? (
        <ReportTable formData={formData} />
      ) : (
        <form className="max-w-md mx-auto bg-blue-100 p-6 rounded-md shadow-md">
          <div className="mb-4">
            <label htmlFor="vendorName" className="block text-gray-600 font-semibold mb-2">Vendor Name</label>
            <input
              type="text"
              id="vendorName"
              name="vendorName"
              value={formData.vendorName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="brandName" className="block text-gray-600 font-semibold mb-2">Brand Name</label>
            <input
              type="text"
              id="brandName"
              name="brandName"
              value={formData.brandName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="vendorContact" className="block text-gray-600 font-semibold mb-2">Vendor Contact Number</label>
            <input
              type="tel"
              id="vendorContact"
              name="vendorContact"
              value={formData.vendorContact}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-600 font-semibold mb-2">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="time" className="block text-gray-600 font-semibold mb-2">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="reason" className="block text-gray-600 font-semibold mb-2">Reason of Return</label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="gatepassNumber" className="block text-gray-600 font-semibold mb-2">Gatepass Number</label>
            <input
              type="text"
              id="gatepassNumber"
              name="gatepassNumber"
              value={formData.gatepassNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => {
                handleSubmit();
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700"
            >
              Add Data
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddData;
