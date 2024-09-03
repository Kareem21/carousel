import React from 'react';
import CategoryTemplate from '../components/CategoryTemplate.jsx';
import { categories } from '../categoryData.js';

const Foreign = () => <CategoryTemplate category={categories.foreign} />;

export default Foreign;