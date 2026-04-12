import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="bg-blue-600 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">معاً لفهم التوحد</div>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-blue-200">الصفحة الرئيسية</Link>
          <Link to="/resources" className="hover:text-blue-200">موارد تعليمية</Link>
          <Link to="/centers" className="hover:text-blue-200">المراكز والمستشفيات</Link>
          <Link to="/contact" className="hover:text-blue-200">تواصل معنا</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation