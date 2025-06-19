import React from 'react';

export const Card = ({ 
  title, 
  description, 
  image, 
  badge, 
  actions,
  variant = 'default' 
} : any) => {
  const variantClasses = {
    default: 'bg-white border-gray-200',
    elevated: 'bg-white border-gray-200 shadow-lg',
    dark: 'bg-gray-800 border-gray-700 text-white'
  };

  return (
    <div className={`border rounded-lg overflow-hidden ${(variantClasses as any)[variant]}`} data-testid="card">
      {image && (
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          {badge && (
            <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
              {badge}
            </span>
          )}
        </div>
        
        {description && (
          <p className={`mb-4 ${variant === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {description}
          </p>
        )}
        
        {actions && (
          <div className="flex space-x-2">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};