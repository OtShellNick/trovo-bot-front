import React from 'react';

import './Page.scss';

const Page = ({ children }: {children: React.ReactNode}) => <div className="page">{children}</div>;

export default Page;
