
-- Drop the restrictive admin-only SELECT policy
DROP POLICY IF EXISTS "Admins can view all roles" ON public.user_roles;

-- Create a permissive policy allowing users to read their own roles
CREATE POLICY "Users can read own roles"
  ON public.user_roles
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- Also allow admins to see all roles
CREATE POLICY "Admins can view all roles"
  ON public.user_roles
  FOR SELECT
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));
