
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';

export interface WorkOrderBreadcrumbProps {
  workOrderId?: string;
  currentPage?: string;
}

export function WorkOrderBreadcrumb({ workOrderId, currentPage }: WorkOrderBreadcrumbProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/admin/dashboard">Dashboard</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/admin/work-orders">Work Orders</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {workOrderId && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={`/admin/work-orders/${workOrderId}`}>
                  {workOrderId.slice(0, 8)}...
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
        {currentPage && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{currentPage}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
