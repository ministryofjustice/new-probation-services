import React from 'react';

const RecentDocuments = () => (
  <div className="primary-container">
    <div className="container-heading">
      <h1 className="text-bold">Recent documents</h1>
    </div>
    <div className="container-content">
      <table role="presentation" className="border-bottom full-width">
        <thead>
          <tr>
            <td className="third-width text-bold text-small">Document name</td>
            <td className="text-bold text-small">Date</td>
            <td className="text-bold text-small" colSpan="2">
              Author
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pre-Sentence Report - Fast</td>
            <td>21/11/2017</td>
            <td>Sarah Francis</td>
            <td className="align-right">
              <a className="active-link">View</a>{' '}
              <a className="active-link">Update</a>{' '}
              <a className="active-link">Delete</a>
            </td>
          </tr>
          <tr>
            <td className="third-width">Parole report</td>
            <td>18/10/2016</td>
            <td>Peter Plumb</td>
            <td className="align-right">
              <a className="active-link">View</a>{' '}
              <a className="active-link">Update</a>{' '}
              <a className="active-link">Delete</a>
            </td>
          </tr>
          <tr>
            <td className="third-width">OASys Assessment</td>
            <td>03/09/2015</td>
            <td>Sarah Francis</td>
            <td className="align-right">
              <a className="active-link">View</a>{' '}
              <a className="active-link">Update</a>{' '}
              <a className="active-link">Delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default RecentDocuments;
