"use client";

import {
  ChartLineUp,
  FileText,
  GraduationCap,
  Robot,
  UsersThree,
  VideoCamera,
  type Icon,
} from "@phosphor-icons/react";
import type { OfferingIcon } from "@/lib/home-content";

const map: Record<OfferingIcon, Icon> = {
  training: GraduationCap,
  resume: FileText,
  call: VideoCamera,
  community: UsersThree,
  interview: Robot,
  analytics: ChartLineUp,
};

export function OfferingGlyph({
  name,
  size = 22,
  className,
}: {
  name: OfferingIcon;
  size?: number;
  className?: string;
}) {
  const Glyph = map[name];
  return <Glyph size={size} weight="duotone" className={className} />;
}
