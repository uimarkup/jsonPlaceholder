import React from 'react';

const APIItem = props => {
  return(
    <div className="row col-xs-12">

          <table className="table table-bordered">
              <tbody>
                  <tr>
                      <td className="greyBackground" rowSpan="2">
                          <div className="checkbox checkbox-primary">
                              <input type="checkbox" id={props.index} checked={props.checked} onChange={props.onChange.bind(null, props.index)} />
                              <label htmlFor={props.index}/>
                          </div>
                      </td>

                      <td className="greyBackground" rowSpan="1">
                              {props.name}
                      </td>
                  </tr>
                  <tr>
                      <td rowSpan="1">
                          <div className="">
                              {props.email}
                          </div>
                      </td>
                  </tr>
              </tbody>
          </table>
    </div>
  );
}

export default APIItem;