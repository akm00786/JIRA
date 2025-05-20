"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function createProject( data , orgId ) {
  

  

  // Check if the user is an admin of the organization
  

  try {
    const project = await db.project.create({
      data: {
        name: data.name,
        key: data.key,
        description: data.description     ,
        organizationId: orgId,
      },
    });

    return project;
  } catch ( error ) {
    throw new Error( "Error creating project: " + error.message ) ;
  }
}

export async function getProject(projectId , orgId) {
  const { userId } = auth();

  if ( !userId || !orgId ) {
    throw new Error( "Unauthorized") ;
  }

  // Find user to verify existence
  const user = await db.user.findUnique( {
    where: { clerkUserId: userId } ,
  } );

  if ( !user ) {
    throw new Error("User not found");
  }

  // Get project with sprints and organization
  const project = await db.project.findUnique({
    where: { id: projectId },
    include: {
      sprints: {
        orderBy: { createdAt: "desc" } ,
      },
    },
  });

  if (!project) {
    throw new Error("Project not found");
  }

  // Verify project belongs to the organization
  if (project.organizationId !== orgId) {
    return null;
  }

  return project;
}

export async function deleteProject( projectId , orgId , orgRole )  {

  const { userId  } = auth() ;

  if ( !userId || !orgId )  {

    throw new Error("Unauthorized") ;

  
  }

  if (orgRole !== "org:admin" ) {
    throw new Error("Only organization admins can delete projects") ;
  }

  const project = await db.project.findUnique({
    where: { id: projectId },
  });

  if (!project || project.organizationId !== orgId) {
    throw new Error(
      "Project not found or you don't have permission to delete it"
    );
  }

  await db.project.delete({
    where: { id: projectId },
  });

  return { success: true };
}