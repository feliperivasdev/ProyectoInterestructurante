const { createClient } = require("@supabase/supabase-js");

// URL y clave de tu proyecto de Supabase
const supabaseUrl = "https://dngpjdbmgbdusrjejvjt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuZ3BqZGJtZ2JkdXNyamVqdmp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2NzIxMzgsImV4cCI6MjA0NjI0ODEzOH0.jgJM7RQw-41Xc3iarM84k27XOQdZE5UEXG5MeLxa9PQ";

// Cliente de conexión
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
