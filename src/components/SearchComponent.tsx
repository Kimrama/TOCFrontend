import { Card } from "../UI/Card";
import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Input } from "../UI/Input";

function SearchComponent() {
    const [searchQuery, setSearchQuery] = useState("");
    const onSearchChange = (query: string) => {
        setSearchQuery(query);
    }
    return <Card className="p-4 bg-card border-border/30 shadow-search">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            placeholder="Search by track name"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-12 h-12 bg-input border-border/50 focus:border-black text-black placeholder:text-muted-foreground text-base"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </Card>
}

export default SearchComponent;