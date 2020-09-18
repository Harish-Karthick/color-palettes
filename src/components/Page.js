import React from "react";

function Page(props) {
  const { children } = props;
  return <section className='page'>{children}</section>;
}

export default Page;
