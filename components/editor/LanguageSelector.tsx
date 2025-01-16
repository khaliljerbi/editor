import { LANGUAGE_CONFIG } from "@/lib/constants";
import { useCodeEditorStore } from "@/lib/store";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function LanguageSelector() {
  const { language, setLanguage } = useCodeEditorStore();
  return (
    <Select value={language} onValueChange={setLanguage}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Object.values(LANGUAGE_CONFIG).map((l) => (
            <SelectItem key={l.id} value={l.id}>
              {l.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default LanguageSelector;
