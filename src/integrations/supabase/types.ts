export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.4"
  }
  public: {
    Tables: {
      blog_posts: {
        Row: {
          author_name: string
          category: string
          content_bm: string
          content_en: string
          content_zh: string
          cover_image_url: string | null
          created_at: string
          excerpt_bm: string
          excerpt_en: string
          excerpt_zh: string
          id: string
          is_published: boolean
          meta_description_bm: string
          meta_description_en: string
          meta_description_zh: string
          meta_keywords: string
          published_at: string | null
          slug: string
          sort_order: number
          tags: string[]
          title_bm: string
          title_en: string
          title_zh: string
          updated_at: string
        }
        Insert: {
          author_name?: string
          category?: string
          content_bm?: string
          content_en?: string
          content_zh?: string
          cover_image_url?: string | null
          created_at?: string
          excerpt_bm?: string
          excerpt_en?: string
          excerpt_zh?: string
          id?: string
          is_published?: boolean
          meta_description_bm?: string
          meta_description_en?: string
          meta_description_zh?: string
          meta_keywords?: string
          published_at?: string | null
          slug: string
          sort_order?: number
          tags?: string[]
          title_bm?: string
          title_en: string
          title_zh?: string
          updated_at?: string
        }
        Update: {
          author_name?: string
          category?: string
          content_bm?: string
          content_en?: string
          content_zh?: string
          cover_image_url?: string | null
          created_at?: string
          excerpt_bm?: string
          excerpt_en?: string
          excerpt_zh?: string
          id?: string
          is_published?: boolean
          meta_description_bm?: string
          meta_description_en?: string
          meta_description_zh?: string
          meta_keywords?: string
          published_at?: string | null
          slug?: string
          sort_order?: number
          tags?: string[]
          title_bm?: string
          title_en?: string
          title_zh?: string
          updated_at?: string
        }
        Relationships: []
      }
      portfolio_items: {
        Row: {
          category: string
          created_at: string
          description_bm: string
          description_en: string
          description_zh: string
          id: string
          image_url: string | null
          is_active: boolean
          link: string | null
          sort_order: number
          title_bm: string
          title_en: string
          title_zh: string
          updated_at: string
        }
        Insert: {
          category?: string
          created_at?: string
          description_bm?: string
          description_en?: string
          description_zh?: string
          id?: string
          image_url?: string | null
          is_active?: boolean
          link?: string | null
          sort_order?: number
          title_bm?: string
          title_en: string
          title_zh?: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          description_bm?: string
          description_en?: string
          description_zh?: string
          id?: string
          image_url?: string | null
          is_active?: boolean
          link?: string | null
          sort_order?: number
          title_bm?: string
          title_en?: string
          title_zh?: string
          updated_at?: string
        }
        Relationships: []
      }
      services: {
        Row: {
          created_at: string
          description_bm: string
          description_en: string
          description_zh: string
          features: Json
          icon: string
          id: string
          is_active: boolean
          portfolio: Json
          pricing: Json
          slug: string
          sort_order: number
          title_bm: string
          title_en: string
          title_zh: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description_bm?: string
          description_en?: string
          description_zh?: string
          features?: Json
          icon?: string
          id?: string
          is_active?: boolean
          portfolio?: Json
          pricing?: Json
          slug: string
          sort_order?: number
          title_bm?: string
          title_en: string
          title_zh?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description_bm?: string
          description_en?: string
          description_zh?: string
          features?: Json
          icon?: string
          id?: string
          is_active?: boolean
          portfolio?: Json
          pricing?: Json
          slug?: string
          sort_order?: number
          title_bm?: string
          title_en?: string
          title_zh?: string
          updated_at?: string
        }
        Relationships: []
      }
      site_content: {
        Row: {
          category: string
          created_at: string
          id: string
          key: string
          updated_at: string
          value: Json
        }
        Insert: {
          category?: string
          created_at?: string
          id?: string
          key: string
          updated_at?: string
          value?: Json
        }
        Update: {
          category?: string
          created_at?: string
          id?: string
          key?: string
          updated_at?: string
          value?: Json
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          avatar_url: string | null
          company_bm: string
          company_en: string
          company_zh: string
          created_at: string
          id: string
          is_active: boolean
          name: string
          quote_bm: string
          quote_en: string
          quote_zh: string
          sort_order: number
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          company_bm?: string
          company_en?: string
          company_zh?: string
          created_at?: string
          id?: string
          is_active?: boolean
          name: string
          quote_bm?: string
          quote_en: string
          quote_zh?: string
          sort_order?: number
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          company_bm?: string
          company_en?: string
          company_zh?: string
          created_at?: string
          id?: string
          is_active?: boolean
          name?: string
          quote_bm?: string
          quote_en?: string
          quote_zh?: string
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
