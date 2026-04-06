export interface SectionProps {
  id: string;
  title?: string;
  label?: string; // Small caps overline
  description?: string;
  variant?: 'lowest' | 'low' | 'bright'; // Maps to surface tiers
}
