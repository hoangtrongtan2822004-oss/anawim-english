// Danh sách icon cho từng chương trình học
// Component: programIcons.ts
// Mục đích: Xuất các component icon dùng bởi `ProgramsSection`.
// Props: Không áp dụng (chỉ export danh sách các component icon).
// Ví dụ sử dụng:
//  import { programIcons } from './programIcons';
//  const Icon = programIcons[index];
//  <Icon />
// Lưu ý: Giữ thứ tự icon khớp với danh sách `programs` ở `ProgramsSection`.
// Có thể mở rộng thêm icon khác nếu cần
import {
  BookOpen,
  GraduationCap,
  Users,
  Star,
  Globe,
  Heart,
} from "lucide-react";

// Export a stable array of icon components used by `ProgramsSection`.
// Keep ordering in sync with the programs list in `ProgramsSection.tsx` or map by key.
export const programIcons = [
  BookOpen,
  GraduationCap,
  Users,
  Star,
  Globe,
  Heart,
];
