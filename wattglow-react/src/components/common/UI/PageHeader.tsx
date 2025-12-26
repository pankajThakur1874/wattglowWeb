import { memo } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundClass?: string;
}

export const PageHeader = memo(function PageHeader({
  title,
  subtitle,
  backgroundClass = '',
}: PageHeaderProps) {
  return (
    <div className={`container-fluid page-header py-5 mb-5 ${backgroundClass}`}>
      <div className="container py-5">
        <h1 className="display-3 text-white mb-3 animated slideInDown">{title}</h1>
        {subtitle && <p className="text-white mb-0 animated slideInDown">{subtitle}</p>}
      </div>
    </div>
  );
});
