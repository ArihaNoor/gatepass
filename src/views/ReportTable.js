import React from 'react';

const ReportTable = ({ formData }) => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Gate Pass</h2>
      <table className="min-w-full border rounded overflow-hidden">
        <tbody>
          <tr className="bg-gray-200">
            <td className="border px-2 py-1 font-bold">Vendor Name:</td>
            <td className="border px-2 py-1">{formData.vendorName}</td>
          </tr>
          <tr>
            <td className="border px-2 py-1 font-bold">Brand Name:</td>
            <td className="border px-2 py-1">{formData.brandName}</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="border px-2 py-1 font-bold">Contact Number:</td>
            <td className="border px-2 py-1">{formData.vendorContact}</td>
          </tr>
          <tr>
            <td className="border px-2 py-1 font-bold">Date:</td>
            <td className="border px-2 py-1">{formData.date}</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="border px-2 py-1 font-bold">Time:</td>
            <td className="border px-2 py-1">{formData.time}</td>
          </tr>
          <tr>
            <td className="border px-2 py-1 font-bold">Reason:</td>
            <td className="border px-2 py-1">{formData.reason}</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="border px-2 py-1 font-bold">Gatepass Number:</td>
            <td className="border px-2 py-1">{formData.gatepassNumber}</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-4">Please present this gate pass to security upon entry.</p>
      <div className="flex justify-end mt-4">
        <button
          onClick={() => window.print()}
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:border-blue-700"
        >
          Print
        </button>
      </div>
    </div>
  );
}

export default ReportTable;
